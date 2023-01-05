import { Box, List, ListItemText } from '@mui/material'
import TextComponent from '@presentation/components/text-common'
import { ButtonCustom } from '@presentation/components/button/buton-common'
import React from 'react'

type Props = {
  textHtml: string
}

function TextVideoContent({ textHtml }: Props) {
  return (
    <Box width="100%" paddingRight="10px" marginTop="20px" textAlign="justify">
      <Box
        paddingLeft="30px"
        paddingRight="5px"
        dangerouslySetInnerHTML={{ __html: textHtml }}
      >
        {/* <List dense={false}>
        <ListItemText primary={<TextComponent type="dark" fontSize="14px" text="1. Este cuestionario consta de 55 declaraiones breves. Lee cuidadosamente cada declaración y decide cuál te descibe de forma más acertada. Sé honesto contigo mismo."/>}/>
        <ListItemText style={{marginTop:'10px'}} primary={<TextComponent type="dark" fontSize="14px" text="Recuerda que nadie hace todo bien, ni siquiera es algo deseable saber hacer de todo."/>}/>
        <ListItemText style={{marginTop:'10px'}} primary={<TextComponent type="dark" fontSize="14px" text="2. Seleciona el número que corresponda para designar la medida en que la declaóacion te representa:"/>}/>
        <Box marginLeft="30px">
          <List dense={false}>
          <ListItemText primary={<TextComponent type="dark" fontSize="14px" text="1 = Nunca es cierto"/>}/>
          <ListItemText primary={<TextComponent type="dark" fontSize="14px" text="1 = Raras veces es cierto"/>}/>
          <ListItemText primary={<TextComponent type="dark" fontSize="14px" text="1 = Algunas veces es cierto"/>}/>
          <ListItemText primary={<TextComponent type="dark" fontSize="14px" text="1 = Usualmente es cierto"/>}/>
          <ListItemText primary={<TextComponent type="dark" fontSize="14px" text="1 = Siempre es cierto"/>}/>
          </List>
        </Box>
        <ListItemText style={{marginTop:'10px'}} primary={<TextComponent type="dark" fontSize="14px" text="3. anota el número que selecciones en la línea a la derecha de cada declaración. He aquí un ejemplo:"/>}/>
        <Box marginLeft="30px">
        <ListItemText style={{marginTop:'10px'}} primary={<TextComponent type="dark" fontSize="14px" text="Me mantengo calmado en situaciones tensas"/>}/>
        </Box>
        <ListItemText style={{marginTop:'20px'}} primary={<TextComponent type="dark" fontSize="14px" text="La persona que respondió en este ejemplo designó el número 2 para indicar que la declaraóion lo representa sólo en raras ocasiones."/>}/>
        <ListItemText style={{marginTop:'30px'}} primary={<TextComponent type="dark" fontSize="14px" text="4. Algunas declaraciones pueden ser similares, pero no exactamente igual."/>}/>
        <ListItemText style={{marginTop:'10px'}} primary={<TextComponent type="dark" fontSize="14px" text="5. Por favor designa una clasióicacion numérica para todas las declaraciones."/>}/>
      </List> */}
      </Box>
    </Box>
  )
}

export { TextVideoContent }
