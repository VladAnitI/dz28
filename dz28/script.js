const App = (props) => {

  const [Text1, setButtonText1] = React.useState(props.Text1)
  const [classList1, setClassList1] = React.useState(props.Class1)
  const [Text2, setButtonText2] = React.useState(props.Text2)
  const [classList2, setClassList2] = React.useState(props.Class2)
  const [Text3, setButtonText3] = React.useState(props.Text3)
  const [classList3, setClassList3] = React.useState(props.Class3)

  const onBlock1Click = () => {
    setButtonText1('MEGIC!!!!!')
    setClassList1('text1new')
  }

  const onBlock2Click = () => {
    setButtonText2('this is pravda!')
    setClassList2('text2new')
  }

  const onBlock3Click = () => {
    setButtonText3('sdrgsergsrgserg')
    setClassList3('text3new')
  }

  return (
    <div className="app">
      <div className={classList1} onClick={onBlock1Click}>{Text1}</div>
      <div className="endClass">
        <div className={classList2} onClick={onBlock2Click}>{Text2}</div>
        <div className={classList3} onClick={onBlock3Click}>{Text3}</div>
      </div>
    </div >
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App Text1="0987654321" Class1="text1defoult" Text2="Roma ne Roma)" Class2="text2defoult" Text3="bla-bla-bla" Class3="text3defoult" />) 