export async function GET() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search', {
    next: {revalidate: 0}
  })
  const data = await res.json()
  console.log(data)
  return Response.json(data)
}
