import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className = 'text-4xl p-4 text-center'>
          hello world!
        </h1>
        <form>
            <input type="text" placeholder='enter item'/>
            <input type="number" placeholder='number'/>
            <input type="submit"/>
          </form>
      </div>
    </main>
  )
}
