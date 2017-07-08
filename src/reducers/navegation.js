const initalNavList = [
          {
            path: '/home',
            label: 'Home'
          },
          {
            path: '/services',
            label: 'Serviços'
          },
          {
            path: '/products',
            label: 'Produtos'
          },
          {
            path: '/contact',
            label: 'Contato'
          },
          {
            path: '/calendar',
            label: 'Calendário'
          },
          {
            path: '/user',
            label: 'Usuario'
          },
          {
            path: '/cart',
            label: 'Carrinho'
          },
          {
            path: '/pet',
            label: 'Meus pets'
          }
        ]
export default function navegation(state = initalNavList, action) {
  switch (action.type) {
    default:
      return state;
  }
}