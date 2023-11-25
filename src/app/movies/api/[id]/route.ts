export async function GET(request: Request, {params}: { params: { id: string } }) {
    const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`)
    const data = await res.json();
    
    return Response.json(data?.data?.movie)
}
