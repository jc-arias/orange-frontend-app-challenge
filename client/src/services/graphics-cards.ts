import { switchMap, of, catchError } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'

const PATHS = {
  HOST: 'http://localhost:3001/graphics',
  GET: '/graphics-cards/',
  DETAIL: '/graphics-cards/detail/',
  PAGE: 'page=',
  LIMIT: 'limit=20'
}

class GraphicsCards {
  get (filter: String, page: Number) {
    return fetch(PATHS.GET, filter, page)
  }

  getExtendedInfo (id: String) {
    return fetch(PATHS.DETAIL, id, -1)
  }
}

function fetch (path: String, param: String, page: Number) {
  const url = (page > -1) ? `${PATHS.HOST}${path}${param}?${PATHS.PAGE}${page}${PATHS.LIMIT}` : `${PATHS.HOST}${path}${param}`
  const subscription$ = fromFetch(url).pipe(
    switchMap((response: any) => {
      if (response.ok) {
        return response.json()
      } else {
        return of({ error: true, message: `Error ${response.status}` })
      }
    }),
    catchError((err: any) => {
      console.error(err)
      return of({ error: true, message: err.message })
    })
  )
  return subscription$
}

const GraphicsCardsService = new GraphicsCards()
export default GraphicsCardsService
