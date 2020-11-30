import { ALL_LISTS } from "../../data/lists"

export default (req, res) => {
  res.statusCode = 200
  res.json(ALL_LISTS)
}
