export function ChampionSelectCard(
  props: React.PropsWithChildren<{
    championName: string
    championImage: string
  }>
): React.JSX.Element {
  return (
    <div>
      <h3>{props.championName}</h3>
      <img src={props.championImage} alt={`${props.championName} icon`} />
      {props.children}
    </div>
  )
}
