import { switchMap, of, catchError } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'

const PATHS = {
  HOST: 'http://localhost:3001/graphics',
  GET: '/graphics-cards/',
  DETAIL: '/graphics-cards/detail/'
}

class GraphicsCards {
  get (filter: String) {
    return fetch(PATHS.GET, filter)
  }

  getExtendedInfo (id: String) {
    return fetch(PATHS.DETAIL, id)
  }
}

function fetch (path: String, param: String) {
  console.log(`${PATHS.HOST}${path}${param}`)
  const subscription$ = fromFetch(`${PATHS.HOST}${path}${param}`).pipe(
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
