import notify from '../notify'

export default async item => {
  notify({
    title: 'Scanning items...',
    body: `Your items are being scanned. ${item}`
  })
}
