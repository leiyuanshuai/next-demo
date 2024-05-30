import {NextResponse} from 'next/server'
export async function GET(request, { params }) {
  // 访问http://localhost:3000/dashboard/111
  console.log('params', params) // { team: '111' }
  return NextResponse.json({test: 'ssss'}, { status: 200 })
}
