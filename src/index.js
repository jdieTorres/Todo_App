import React from 'react';
import { createRoot } from 'react-dom/client';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03_examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04_useRef/FocusScreen';
// import { RealExampleRef } from './components/04_useRef/RealExampleRef';
// import { Layout } from './components/05_useLayoutEffect/Layout';
// import { Memorized } from './components/06_memos/Memorized';
// import { MemoHook } from './components/06_memos/MemoHook';
// import { CallbackHook } from './components/06_memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './TodoApp/js/TodoApp';

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

root.render( <TodoApp />);

