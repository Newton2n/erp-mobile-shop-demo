import ERPApp from '@/components/erp-app'

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  return <ERPApp slug={slug} />
}

export function generateStaticParams() { return [{ slug: ['dashboard'] }, { slug: ['login'] }] }
