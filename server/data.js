import mocker from 'mocker-data-generator'

const gpu = {
    id: {
        chance: 'guid'
    },
    model: {
        values: [
            'RTX 1060',
            'RTX 1070',
            'RTX 1080',
            'RTX 2060',
            'RTX 2070',
            'RTX 2080',
            'RTX 3060',
            'RTX 3070',
            'RTX 3080',
            'TITAN',
            'RX 6400',
            'RX 6500',
            'RX 6600',
            'RX 6700',
            'RX 6800',
            'RX 6900'
        ]
    },
    manufacturer: {
        values: [
            'Nvidia',
            'Radeon',
            'Zotac',
            'Asus',
            'EVGA',
            'Gigabyte',
            'MSI',
            'Sapphire',
            'Asrock',
            'XFX'
        ]
    },
    memory: {
        chance: 'integer({"min": 4, "max": 12})'
    },
    tdp: {
        chance: 'integer({"min": 120, "max": 180})'
    },    
    clock: {
        chance: 'integer({"min": 1200, "max": 1800})'
    },
    price: {
        chance: 'integer({"min": 300, "max": 1000})'
    },
    image: {
        values: [
            'https://thumb.pccomponentes.com/w-530-530/articles/35/357848/1157-msi-geforce-rtx-3060-ventus-2x-oc-12gb-gddr6.jpg',
            'https://thumb.pccomponentes.com/w-530-530/articles/1022/10221801/1844-amd-radeon-rx-6600-xt-challenger-d-oc-8gb-gddr6.jpg',
            'https://thumb.pccomponentes.com/w-530-530/articles/35/357142/1351-zotac-gaming-geforce-rtx-3060-twin-edge-12gb-gddr6.jpg',
            'https://thumb.pccomponentes.com/w-530-530/articles/52/528568/1116-gigabyte-geforce-rtx-3070-gaming-oc-lhr-v2-8gb-gddr6.jpg',
            'https://thumb.pccomponentes.com/w-530-530/articles/51/513363/1722-xfx-speedster-qick-308-amd-radeon-rx-6600-xt-black-8gb-gddr6.jpg',
            'https://thumb.pccomponentes.com/w-530-530/articles/59/591940/1873-msi-amd-radeon-rx-6600-mech-2x-8gb-gddr6.jpg',
            'https://thumb.pccomponentes.com/w-530-530/articles/47/479160/1302-msi-rtx-3060-ti-ventus-2x-oc-v1-lhr-8gb-gddr6.jpg',
            'https://thumb.pccomponentes.com/w-530-530/articles/42/422948/1344-msi-geforce-rtx-3060-ti-ventus-3x-oc-lhr-8gb-gddr6.jpg',
            'https://thumb.pccomponentes.com/w-530-530/articles/23/233569/1.jpg',
            'https://thumb.pccomponentes.com/w-530-530/articles/1041/10410243/1168-inno3d-geforce-rtx-2060-twin-x2-6gb-gddr6.jpg',
            'https://thumb.pccomponentes.com/w-530-530/articles/1041/10410278/1940-pny-geforce-rtx-3080-xlr8-gaming-uprising-epic-x-rgb-lhr-10gb-gddr6x.jpg',
            'https://thumb.pccomponentes.com/w-530-530/articles/75/759979/1648-inno3d-geforce-rtx-3060-ti-ichill-x3-red-lhr-8gb-gddr6.jpg'
        ]
    }
}

function getData() {
    return mocker.mocker().schema('gpu', gpu, 100).buildSync()
}

export default getData