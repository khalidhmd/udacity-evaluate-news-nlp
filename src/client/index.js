import { callAPI } from './js/formHandler'
import { renderResult } from './js/RenderResult'
import './styles/style.scss'


const urlText = document.getElementById('url');
const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', async (event) => {
  event.preventDefault()
  const data = await callAPI(urlText.value)
  renderResult(data)
})