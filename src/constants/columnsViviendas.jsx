export default [
  {
    id: 'title',
    label: 'Nombre',
  },
  {
    id: 'price',
    label: 'Precio',
    cell: (row) => (
      <span style={{ color: row.price > 400000 ? 'red' : 'green' }}>
        {row.price}
      </span>
    ),
  },
  {
    id: 'district',
    label: 'Barrio',
  },
  {
    id: 'seller',
    label: 'Vendedor',
  },
  {
    id: 'roomNumber',
    label: 'N. Habitaciones',
  },
  {
    id: 'hasLift',
    label: '¿Ascensor?',
  },
  {
    id: 'description',
    label: 'Descriptión',
  },
]
