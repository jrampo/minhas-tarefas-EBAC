import FiltroCard from '../../components/FiltroCard'

const BarraLateral = () => {
  return (
    <aside>
      <div>
        <input type="text" placeholder="Buscar" />
        <div>
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
        </div>
      </div>
    </aside>
  )
}

export default BarraLateral
