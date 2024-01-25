import './index.css'
const Banner = props => {
  const {bannerCardsList} = props
  const {header, description, className} = bannerCardsList
  return (
    <li className={className}>
      <h1>{header}</h1>
      <p>{description}</p>
      <button>show more</button>
    </li>
  )
}
export default Banner
