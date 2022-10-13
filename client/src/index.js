import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/** Pages */
import Landing from "./pages/landing"
import TextEditor from "./pages/text_editor"
import Send from "./pages/send"


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/postcard/edit_text" element={<TextEditor />} />
        <Route exact path="/postcard/send_postcard" element={<Send />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
