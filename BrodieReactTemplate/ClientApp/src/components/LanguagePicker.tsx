import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useTranslation } from 'react-i18next'

import { useAppState } from 'src/hooks/useAppState'

export const LanguagePicker = () => {
  const appState = useAppState()
  const { i18n } = useTranslation()

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const lang = event.target.value
    i18n.changeLanguage(lang)
    appState.notifyLanguageChanged(lang)
  }

  return (    
    <FormControl sx={{ m: 1, minWidth: '4rem' }} size="small">
      <InputLabel id="language-select-small"></InputLabel>
      <Select
        labelId="language-select-small"
        id="language-select-small"                
        value={appState.language}
        defaultValue='en'
        label=""
        onChange={handleLanguageChange}
      >                
        <MenuItem  value='en'>EN</MenuItem>
        <MenuItem value='es'>es</MenuItem>
        <MenuItem value='fr'>fr</MenuItem>
      </Select>
    </FormControl>
  )
}