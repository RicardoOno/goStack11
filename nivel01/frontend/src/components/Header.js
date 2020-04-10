import React from 'react';

/** export default function Header(props){
*     <h1> { props.title } </h1>
* title = props = propriedade
* children = todo conteudo entre os componentes
*/ 
export default function Header({ title }){ 
  return (
    <header>
      <h1> { title } </h1>
    </header>
  )
} 