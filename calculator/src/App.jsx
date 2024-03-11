import { useState } from 'react'
import './App.css'

const numericButtonsClasses ='btn btn-outline-danger w-100'
const operatorButtonsClasses ='btn btn-outline-info w-100'
const specialButtonsClases = 'btn btn-outline-warning w-100'


function App() {
  const [display, setDisplay] = useState({
    value: '0',
    hasPoint: false,
    operator: '',
    previousValue: '0',
  })

  const deleteLastCharacter= ()=>{
    setDisplay({
      ...display,
      value: display.value.slice(0, -1),
      hasPoint: (display.value.slice(-1)=== '.'? false: display.hasPoint)
    })
    if (display.value.length === 1){
      setDisplay({
        ...display,
        value: '0'
      })
    }
  }

  const setOperator = (operator)=>{
    setDisplay({
      ...display,
      operator,
      previousValue: display.value,
      value: '0',
      hasPoint: false,
    })
  }

  const calculate = () =>{
    //let result = 0
   // if (display.operator === '%'){
    //  result = eval(display.previousValue + '/100 *' + display.value)
    //} else {
     // result = eval(display.previousValue + display.operator + display.value)
    //}

    let result = (display.operator === '%')?
    eval(display.previousValue + '/100 *'+display.value):
    eval(display.previousValue + display.operator +display.value)

    result = result + ""

    setDisplay({
    ...display,
    operator:'',
    hasPoint: result.includes("."),
    previousValue: '0',
    value: limit (result),
    })
  }

  const limit = (string = '',length = 10)=>{
    return string.slice(0, length)
  }

  const updateDisplay =(value)=>{
    if (value ==='.'){
      if(display.hasPoint){
        return
      }
      setDisplay({
        ...display,
        value: limit(display.value + value),
        hasPoint: true
      })
      return
    }
    if (display.value ==='0'){
      setDisplay({
        ...display,
        value: limit(value),
      })
      return
    }
    setDisplay({
      ...display,
      value: limit(display.value + value),
    })
  }

  const clearDisplay=()=>{
    setDisplay({
      ...display,
      value: '0',
      hasPoint: false,
    })
  }

  const buttonsFunctions = {
    updateDisplay,
    clearDisplay,
    deleteLastCharacter,
    setOperator,
    calculate,
}
  
  return (
    <div>
      <h1>Calculator</h1>
      <hr/>
    <table className="center">
      <tbody>
        <tr>
          <td className="text-end" colSpan={4}>
            <h2>{display.value}</h2>
          </td>
        </tr>

        <tr>
          <td><button
            className={specialButtonsClases}
            type='button'
            onClick={clearDisplay}
            >
              C
            </button>
          </td>

          <td><button
            className={specialButtonsClases}
            type='button'
            onClick={deleteLastCharacter}
            >
              {'<'}
            </button>
          </td>

          <td><button
            className={operatorButtonsClasses}
            type='button'
            onClick={()=> setOperator('%')}
            >
              %</button>
          </td>
          <td><button
            className={operatorButtonsClasses}
            type='button'
            onClick={()=> setOperator('/')}
            >
              /</button>
          </td>

        </tr><tr>
          <td><button
            className={numericButtonsClasses}
            type='button'
            onClick={()=>updateDisplay('7')}
            >
              7</button>
          </td>

          <td><button
            className={numericButtonsClasses}
            type='button'
            onClick={()=>updateDisplay('8')}
            >
              8</button>
          </td>

          <td><button
            className={numericButtonsClasses}
            type='button'
            onClick={()=>updateDisplay('9')}
            >
              9</button>
          </td>

          <td><button
            className={operatorButtonsClasses}
            type='button'
            onClick={()=> setOperator('*')}
            >
              X</button>
          </td>
        </tr><tr>

          <td><button
            className={numericButtonsClasses}
            type='button'
            onClick={()=>updateDisplay('4')}
            >
              4</button>
          </td>

          <td><button
            className={numericButtonsClasses}
            type='button'
            onClick={()=>updateDisplay('5')}
            >
              5</button>
          </td>

          <td><button
            className={numericButtonsClasses}
            type='button'
            onClick={()=>updateDisplay('6')}
            >
              6</button>
          </td>

          <td><button
            className={operatorButtonsClasses}
            type='button'
            onClick={()=> setOperator('-')}
            >
              -</button>
          </td>
        </tr>

        <tr>
          <td><button
            className={numericButtonsClasses}
            type='button'
            onClick={()=>updateDisplay('1')}
            >
              1</button>
          </td>

          <td><button
            className={numericButtonsClasses}
            type='button'
            onClick={()=>updateDisplay('2')}
            >
              2</button>
          </td>

          <td><button
            className={numericButtonsClasses}
            type='button'
            onClick={()=>updateDisplay('3')}
            >
              3</button>

          </td>

          <td><button
            className={operatorButtonsClasses}
            type='button'
            onClick={()=> setOperator('+')}
            >
              +</button>
          </td>

        </tr><tr>
          <td colSpan={2}>
            <button
            className={numericButtonsClasses}
            type='button'
            onClick={()=>updateDisplay('0')}
            >
              0</button>
          </td>
          
          <td> <button
            className={numericButtonsClasses}
            type='button'
            onClick={()=>updateDisplay('.')}
            >
              .</button>
          </td>

          <td><button
            className={specialButtonsClases}
            type='button'
            onClick={calculate}
            >
              =
            </button>
          </td>
        </tr>
      </tbody>

    </table>
    </div>
  )
}

export default App
