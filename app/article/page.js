import ArticlesComponent from "./article"
export default function page() {
    return (
      <>
        <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">Blog Sederhana</h1>
    </header>
    <main className="p-4">
        <div className="grid grid-cols-3 gap-4">
        <ArticlesComponent/>
        </div>
    </main>
    <footer className="bg-gray-700 text-white p-4 text-center">
        Footer Blog
    </footer>
      </>
    )
  }
  