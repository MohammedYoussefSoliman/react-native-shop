import ProductsData from '../../data/dummy-data'

const initialState = {
    availableProducts: ProductsData,
    userProducts: ProductsData.filter(prod => prod.ownerId === 'u1')
}

export default (state = initialState) => {
    return state
}