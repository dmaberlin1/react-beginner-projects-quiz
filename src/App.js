import './index.scss';
import {useState} from "react";

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct,setStep,setCorrect}) {
    const reset=()=>{
        setStep(0)
        setCorrect(0)
    }
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='result' />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <button onClick={()=>reset()}>Попробовать снова</button>
    </div>
  );
}

function Game({step,question,onClickVariant}) {

    const percentage=Math.round((step/questions.length)*100)

    console.log(percentage)

   const questionVariants=question.variants.map((variant,index)=>{
        return( <li onClick={()=>onClickVariant(index)} key={index}>{variant}</li>)
    })

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
          {questionVariants}
      </ul>
    </>
  );
}

function App() {

    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question=questions[step];

    const onClickVariant=(index)=>{
        console.log(step,index)
        setStep(step+1)
        if(index===question.correct){
            setCorrect(correct+1)
        }
    }
    console.log(question)

    return (
      <div className='App'>
      {step !== questions.length ?
          <Game step={step} question={question} onClickVariant={onClickVariant}/>

      : <Result setCorrect={setCorrect} correct={correct} setStep={setStep}></Result>}
      </div>
  );
}

export default App;
