import { NextResponse } from 'next/server';

// 영화 검색 api에 연결된 라우트 핸들러
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const input: string | null = searchParams.get('title');

  const FETCH_URL = `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=ko-KOR&page=1`;
  try {
    const res = await fetch(FETCH_URL, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    });
    if (!res) {
      return NextResponse.json({
        message: '영화 정보를 찾을 수 없습니다',
      });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: JSON.stringify(error) });
  }
};
