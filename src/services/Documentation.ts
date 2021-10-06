import axios from 'axios'
import { markdownEndpoint } from '../utils/Navigation'

export default async function useDocumentation (url: markdownEndpoint): Promise<string> {
  const { data } = await axios.get(url)
  return data
}