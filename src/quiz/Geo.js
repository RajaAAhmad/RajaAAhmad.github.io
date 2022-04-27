import '../App.css';
import {
  Container, Center, Heading, Box, Button, Text, RadioGroup, Radio,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { DATA } from './geo_data';
import {motion} from 'framer-motion';
import useSound from 'use-sound';
import tada from './tada.flac';

function Geo() {
  let [selectData, select] = useState([])
  let [success, setSuccess] = useState()
  let [score, setScore] = useState()
  let [showScore, setShowScore] = useState()
  let [showCorrection, setShowCorrection] = useState()
  const [play] = useSound(tada);

  useEffect(() => {
    nullify()
  }, [])

  const nullify = () => {
    let data = []
    for (let i = 0; i < DATA.length; i++) {
      data.push(-1)
    }
    select(data)
    setShowScore(false)
    setSuccess(false)
    setShowCorrection(false)
  }

  const checkAnswers = () => {
    setShowScore(false)
    setSuccess(false)
    setShowCorrection(false)
    let result = check(DATA, selectData)
    if (result.correct) {
      play()
      setSuccess(true)
      let scoreStr = `${result.score}/${DATA.length}`
      setScore(scoreStr)
    } else {
      setScore(`${result.score}/${DATA.length}`)
      setShowScore(true)
      setShowCorrection(true)
    }
  }

  const handleChange = (key, e) => {
    let data = selectData
    data[key] = parseInt(e)
    let [...postData] = data
    select(postData)
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        opacity: 0,
        scale: .8
      },

      visible: {
        opacity: 1,
        scale: 1,
      }
    }} > 
      <Container maxW='container.lg'>
        <Center>
          <Heading className='heading' size='xl'>Geopraphy</Heading>
        </Center>
      </Container>
      <div className='container' style={{ paddingLeft: 20 + '%', paddingRight: 20 + '%' }}>
        {DATA.map((item, key) =>
          <div key={key}>
            <Box padding="3" borderWidth='1px' borderRadius='lg' className='container'>
              <Text fontSize='xl'>{item.question}</Text>
              <br />
              <RadioGroup onChange={(e) => handleChange(key, e)} value={selectData[key]}>
                {item.options.map((option, key1) =>
                  <div key={key1}>
                    <Radio name={key1} value={key1}>{option}</Radio>
                    <br />
                  </div>
                )}
                <br />
                {showCorrection
                  ?
                  <Alert status='info'>
                    <AlertIcon />
                    The answer is: {DATA[key].options[DATA[key].correct]}
                  </Alert>
                  : null
                }
              </RadioGroup>
            </Box>
          </div>
        )}
        <br />
        <Center>
          {success
            ? <Alert width={650} status='success'>
              <AlertIcon />
              All of your answers are correct! {score}
            </Alert>
            : null
          }

          {showScore
            ? <Alert width={650} status='info'>
              <AlertIcon />
              Your score is: {score}
            </Alert>
            : null
          }
        </Center>
        <Center>
          <Button className='buttons' colorScheme='red' onClick={nullify}>
            Reset
          </Button>
          <Button className='buttons' colorScheme='teal' onClick={checkAnswers}>
            Check
          </Button>
        </Center>
      </div>
    </motion.div>
  );
}

function check(data, answers) {
  let result = {
    correct: false,
    score: 0,
  }
  for (let i in data) {
    if (data[i].correct === answers[i]) {
      result.score = result.score + 1
    }
  }
  if (result.score === data.length) {
    result = { correct: true, score: result.score }
    return result
  } else {
    return result
  }
}

export default Geo;
