import React from 'react'
import { ChampionSelectCard } from './ChampionSelectCard'
import { champions } from '../../utils/champions'

interface ChampionSelectProps {
  championSelected: (championName: string) => void
}

export function ChampionSelect({ championSelected }: ChampionSelectProps): React.JSX.Element {
  const handleChampionSelection = (championName: string): void => {
    championSelected(championName)
  }
  return (
    <>
      <h2 className="text-center">Champion Select</h2>
      <div className="grid grid-cols-6 gap-3 text-center px-8 min-h-60 max-h-118 overflow-y-auto">
        {champions.map((champion) => (
          <ChampionSelectCard
            key={champion.championName}
            championName={champion.championName}
            championImage={champion.championImage}
            onClick={() => handleChampionSelection(champion.championName)}
          ></ChampionSelectCard>
        ))}
      </div>
    </>
  )
}
