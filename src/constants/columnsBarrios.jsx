export default [
    {
      id: 'district',
      label: 'Barrio',
    },
    {
      id: 'houseQuantity',
      label: 'N. de Viviendas',
    },
    {
      id: 'midPrice',
      label: 'Precio medio',
      cell: (row) => (
        <span style={{ color: row.midPrice > 400000 ? 'red' : 'green' }}>
          {row.midPrice}
        </span>
      ),
    },
    {
      id: 'sellerQuantity',
      label: 'N. de Vendedores',
    },
    {
      id: 'newConstruction',
      label: 'Obra nueva',
    },
    {
      id: 'description',
      label: 'Descriptión',
    },
  ]