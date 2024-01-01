import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>   <Typography variant="body2" color="text.secondary">
    {"Copyright © "}
    <Link color="inherit" to="/page2">
      Youngrilex Artwork
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography></div>
  )
}

export default Footer