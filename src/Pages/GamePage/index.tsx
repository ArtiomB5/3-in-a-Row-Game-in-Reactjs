import {useCallback, useEffect, useState} from 'react';
import {Scene} from "../../Assets/Styles/Scene";
import {GameField} from "../../Assets/Styles/GameField";
import {SceneCover} from "../../Assets/Styles/SceneCover";
import {Time} from "../../Components/Time";
import Draggable, {DraggableEvent} from 'react-draggable';
import * as CONSTANTS from '../../Services/Constants'

import gemsCount from '../../Assets/Images/Tileset/PNG/stones.png'
import coinsCount from '../../Assets/Images/Tileset/PNG/coins.png'
import ambient from '../../Assets/Music/mystery.mp3'
import {Gem, MainColumn, SecondColumn, SecondColumnScoreBlock} from "./style";
import {validMovesCheck} from "../../Services/Utils/validMovesCheck";
import { TotalGemsCoins } from '../../Components/Time/style/TotalGemsCoins';

//Список цветов
const gemsColors = [
    'blue',
    'green',
    'red',
    'yellow',
]

type colorsType = 'blue' | 'green' | 'pink' | 'yellow' | '';
type SquareType = {
    id: number
    color: string
}

export const GamePage = () => {
    const [currentColorArrangement, setCurrentColorArrangement] = useState<colorsType[]>([]);
    const [squareBeingDragged, setSquareBeingDrugged] = useState<null | SquareType>(null)
    const [blueGems, setBlueGems] = useState(0)
    const [greenGems, setGreenGems] = useState(0)
    const [pinkGems, setPinkGems] = useState(0)
    const [yellowGems, setYellowGems] = useState(0)
    const [gems, setGems] = useState(0)
    const [coins, setCoins] = useState(0)
    const [isMuted, setIsMuted] = useState(false)
    const setGemsColor = useCallback((color: colorsType, count: number) => {
        if (color === "blue") {
            setBlueGems(pv => pv + count)
        }
        if (color === "green") {
            setGreenGems(pv => pv + count)
        }
        if (color === "pink") {
            setPinkGems(pv => pv + count)
        }
        if (color === "yellow") {
            setYellowGems(pv => pv + count)
        }
        setGems(blueGems + greenGems + pinkGems + yellowGems)
        setCoins(blueGems + greenGems * 5 + pinkGems * 10 + yellowGems * 15)
    }, [blueGems, greenGems, pinkGems, yellowGems])

    const checkForColumnOfFour = useCallback(() => {
        for (let i = 0; i <= 39; i++) {
            const columnOfFour = [i, i + CONSTANTS.SCENE_WIDTH, i + CONSTANTS.SCENE_WIDTH * 2, i + CONSTANTS.SCENE_WIDTH * 3]
            const decideColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === ''

            if (columnOfFour.every(square => currentColorArrangement[square] === decideColor && !isBlank)) {
                columnOfFour.forEach(square => currentColorArrangement[square] = '')
                setGemsColor(decideColor, 4)
                return true
            }
        }
    }, [currentColorArrangement, setGemsColor])
    const checkForRowOfFour = useCallback(() => {
        for (let i = 0; i < 64; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const decideColor = currentColorArrangement[i]
            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 61, 62, 63]
            const isBlank = currentColorArrangement[i] === ''

            if (notValid.includes(i)) continue

            if (rowOfFour.every(square => currentColorArrangement[square] === decideColor && !isBlank)) {
                rowOfFour.forEach(square => currentColorArrangement[square] = '')
                setGemsColor(decideColor, 4)
                return true
            }
        }
    }, [currentColorArrangement, setGemsColor])

    const checkForColumnOfThree = useCallback(() => {
        for (let i = 0; i < 47; i++) {
            const columnOfTree = [i, i + CONSTANTS.SCENE_WIDTH, i + CONSTANTS.SCENE_WIDTH * 2]
            const decideColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === ''

            if (columnOfTree.every(square => currentColorArrangement[square] === decideColor && !isBlank)) {
                columnOfTree.forEach(square => currentColorArrangement[square] = '')
                setGemsColor(decideColor, 3)
                return true
            }
        }
    }, [currentColorArrangement, setGemsColor])
    const checkForRowOfThree = useCallback(() => {
        for (let i = 0; i < CONSTANTS.SCENE_WIDTH * CONSTANTS.SCENE_WIDTH; i++) {
            const rowOfTree = [i, i + 1, i + 2]
            const decideColor = currentColorArrangement[i]
            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63]
            const isBlank = currentColorArrangement[i] === ''

            if (notValid.includes(i)) continue

            if (rowOfTree.every(square => currentColorArrangement[square] === decideColor && !isBlank)) {
                rowOfTree.forEach(square => currentColorArrangement[square] = '')
                setGemsColor(decideColor, 3)
                return true
            }
        }
    }, [currentColorArrangement, setGemsColor])

    const moveIntoSquareBelow = useCallback(() => {
        for (let i = 0; i <= 55; i++) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isFirstRow = firstRow.includes(i)

            if (isFirstRow && currentColorArrangement[i] === '') {
                let randomNumber = Math.floor(Math.random() * gemsColors.length)
                currentColorArrangement[i] = gemsColors[randomNumber] as colorsType
            }

            if ((currentColorArrangement[i + CONSTANTS.SCENE_WIDTH]) === '') {
                currentColorArrangement[i + CONSTANTS.SCENE_WIDTH] = currentColorArrangement[i]
                currentColorArrangement[i] = ''
            }
        }
    }, [currentColorArrangement])

    const dragStart = (e: any) => {
        if (squareBeingDragged === null) {
            setSquareBeingDrugged({
                id: Number(e?.target?.id),
                color: e?.target?.title,
            })
        } else {
            if (validMovesCheck(squareBeingDragged.id, e?.target?.id)) {
                const squareBeingDraggedId = squareBeingDragged.id
                const squareBeingReplacedId = Number(e?.target?.id)

                currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.color as colorsType
                currentColorArrangement[squareBeingDraggedId] = e?.target?.title as colorsType

                const isAColumnOfFour = checkForColumnOfFour()
                const isARowOfFour = checkForRowOfFour()
                const isAColumnOfThree = checkForColumnOfThree()
                const isARowOfThree = checkForRowOfThree()

                if (
                    squareBeingReplacedId &&
                    validMovesCheck(squareBeingDraggedId, squareBeingReplacedId) &&
                    (isAColumnOfThree || isAColumnOfFour || isARowOfThree || isARowOfFour)
                ) {
                    setSquareBeingDrugged(null)
                } else {
                    currentColorArrangement[squareBeingReplacedId] = e?.target?.title as colorsType
                    currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.color as colorsType
                    setCurrentColorArrangement([...currentColorArrangement])
                }
            }
            setSquareBeingDrugged(null)
        }
    }

    const createBoard = () => {
        const randomColorArrangement: colorsType[] = []
        for (let i = 0; i < CONSTANTS.SCENE_WIDTH * CONSTANTS.SCENE_WIDTH; i++) {
            // Получение случайной цифры от 0 до 5
            const randomNumberFrom0to5 = Math.floor(Math.random() * gemsColors.length)

            // Добавление в массив цвета, полученного по случайно сгенерированному индексу
            const randomColor = gemsColors[randomNumberFrom0to5] as colorsType
            randomColorArrangement.push(randomColor)
        }
        // Помещение массива цветов в локальный state
        setCurrentColorArrangement(randomColorArrangement)
    }

    useEffect(() => {
        createBoard()
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            checkForColumnOfFour()
            checkForRowOfFour()
            checkForColumnOfThree()
            checkForRowOfThree()
            moveIntoSquareBelow()
            setCurrentColorArrangement([...currentColorArrangement])
        }, 150)
        return () => clearInterval(timer)
    }, [
        checkForColumnOfFour,
        checkForRowOfFour,
        checkForColumnOfThree,
        checkForRowOfThree,
        moveIntoSquareBelow,
        currentColorArrangement
    ])
    return (
        <GameField>
            <audio controls autoPlay loop style={{display: 'none'}} muted={isMuted}>
                <source src={ambient} type="audio/ogg"/>
            </audio>
            <SecondColumn>
                <Time />
                <SecondColumnScoreBlock>
                    <TotalGemsCoins gemsBG={gemsCount}>
                        <div>{gems}</div>
                    </TotalGemsCoins>
                    <TotalGemsCoins gemsBG={coinsCount}>
                        <div>{coins}</div>
                    </TotalGemsCoins>
                </SecondColumnScoreBlock>
            </SecondColumn>
            <MainColumn>
                <SceneCover>
                    <Scene>
                        {currentColorArrangement.map((candyColor, index) =>
                            <Draggable
                                grid={[0, 0]}
                                key={`${candyColor}${index}`}
                                onStart={(de: DraggableEvent) => {
                                    dragStart(de)
                                    console.log(de)
                                }}
                            >
                                <Gem
                                    background={candyColor}
                                    role="img"
                                    id={String(index)}
                                    title={candyColor}
                                    isSelected={index === squareBeingDragged?.id}
                                    style={{backgroundColor: `${candyColor}`}}
                                />
                            </Draggable>
                        )}
                    </Scene>
                </SceneCover>
            </MainColumn>
        </GameField>
    );
}
