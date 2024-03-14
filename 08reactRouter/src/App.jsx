import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom"

import {Home, About, Contact, NotFound, DynamicPage, NotDynamicPage,Book, BookList, NewBook, BooksLayout} from './components'

function App() {

  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/notfound" element={<NotFound/>}></Route>
      <Route path="/users/:id" element={<DynamicPage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>

      <Route path="/users/notdy" element={<NotDynamicPage/>}></Route>

      <Route path="/books" element={<BooksLayout></BooksLayout>}>
        <Route index element={<BookList/>}></Route>
        <Route path=":bookid" element={<Book></Book>}></Route>
        <Route path="new" element={<NewBook></NewBook>}></Route>
      </Route>
      <Route path="/about-us" element={<Navigate replace to="/about"></Navigate>}></Route>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
