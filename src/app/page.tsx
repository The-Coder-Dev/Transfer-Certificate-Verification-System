import TcSearchCard from "@/components/tc-verification/TcSearchCard"

const HomePage = () => {
  return (
    <section className='w-full min-h-dvh'>
      <div className="w-full h-full mx-auto max-w-7xl flex flex-col gap-10 items-center justify-center">
          <div className="mt-10">
            <h1 className="text-4xl">Transfer Certificate Verification</h1>
          </div>

          <div className="max-w-5xl w-full">
            <TcSearchCard />
          </div>
      </div>
    </section>
  )
}

export default HomePage