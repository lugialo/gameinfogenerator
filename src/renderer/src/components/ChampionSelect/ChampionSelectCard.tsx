export function ChampionSelectCard(
  props: React.PropsWithChildren<{
    championName: string
    championImage: string
    onClick: () => void
  }>
): React.JSX.Element {
  return (
    <div onClick={() => props.onClick()} className="cursor-pointer w-fit">
      <h3>{props.championName}</h3>
      <img src={props.championImage} alt={`${props.championName} icon`} />
      {props.children}
    </div>
  )
}
