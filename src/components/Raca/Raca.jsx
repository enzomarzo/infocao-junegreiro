import React from 'react'

import RacaSelecionada from '../RacaSelecionada'
import RacaNaoSelecionada from '../RacaNaoSelecionada'

export default function Raca (props) {
  const racaFoiSelecionada = Boolean(props.raca.name)

  return (
    racaFoiSelecionada
    ? <RacaSelecionada {...props} />
    : <RacaNaoSelecionada />
  )
}