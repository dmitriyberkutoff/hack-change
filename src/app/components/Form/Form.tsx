'use client'

import styles from './Form.module.css'
import {FormControl, InputLabel, Select, MenuItem, Button, TextField} from "@mui/material";
import {useState} from "react";

export const Form = () => {
    const [age, setAge] = useState<number>();
    const [marriage, setMarriage] = useState<number>();
    const [children, setChildren] = useState<number>();
    const [history, setHistory] = useState<number>();
    const [source, setSource] = useState<number>();
    const [years, setYears] = useState<number>();
    const [pdn, setPdn] = useState<number>();
    const [salary, setSalary] = useState<number>();
    const [hasSave, setHasSave] = useState<number>();
    const [risk, setRisk] = useState(0);
    const [approve, setApprove] = useState<number>();

    const [step, setStep] = useState(1);

    const calculatedRisk = () => {
        console.log(risk, age, marriage, children, history, source, years, pdn, salary, hasSave);
        if (!age || !marriage || !children || !history || !source || !years || !pdn || !salary || !hasSave) {
            setRisk(0);
        } else {
            setRisk(age + marriage + children + history + source + years + pdn + salary + hasSave)
        }
    }

    return <div style={{marginRight: '40px'}}>
        <h2 style={{marginBottom: '10px'}}>Рассчет уровня риска</h2>
        <div className={styles.form}>
            {step === 1 && <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Возраст клиента</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age || null}
                    label="Возраст клиента"
                    onChange={(event) => {
                        setAge(event.target.value as number);
                        calculatedRisk()
                    }}
                >
                    <MenuItem value={5}>До 25</MenuItem>
                    <MenuItem value={1}>От 26 до 55</MenuItem>
                    <MenuItem value={3}>От 56 до 74</MenuItem>
                    <MenuItem value={10}>Выше 75</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Семейное положение</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={marriage || null}
                    label="Семейное положение"
                    onChange={(event) => {
                        setMarriage(event.target.value as number);
                        calculatedRisk()
                    }}
                >
                    <MenuItem value={3}>Холост</MenuItem>
                    <MenuItem value={2}>Женат/замужем</MenuItem>
                    <MenuItem value={5}>В разводе</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Наличие детей</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={children || null}
                    label="Наличие детей"
                    onChange={(event) => {
                        setChildren(event.target.value as number);
                        calculatedRisk()
                    }}
                >
                    <MenuItem value={3}>Да</MenuItem>
                    <MenuItem value={5}>Нет</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Кредитная история</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={history || null}
                    label="Кредитная история"
                    onChange={(event) => {
                        setHistory(event.target.value as number);
                        calculatedRisk()
                    }}
                >
                    <MenuItem value={1}>Хорошая</MenuItem>
                    <MenuItem value={8}>Средняя</MenuItem>
                    <MenuItem value={15}>Плохая</MenuItem>
                    <MenuItem value={3}>Отсутствует</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Основной источник получения доходов</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={source || null}
                    label="Основной источник получения доходов"
                    onChange={(event) => {
                        setSource(event.target.value as number);
                        calculatedRisk()
                    }}
                >
                    <MenuItem value={2}>Работа</MenuItem>
                    <MenuItem value={7}>Предпринимательство</MenuItem>
                    <MenuItem value={2}>Пенсия</MenuItem>
                    <MenuItem value={15}>Иное</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Стаж</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={years || null}
                    label="Основной источник получения доходов"
                    onChange={(event) => {
                        setYears(event.target.value as number);
                        calculatedRisk()
                    }}
                >
                    <MenuItem value={2}>Свыше 5 лет</MenuItem>
                    <MenuItem value={3}>От 1 до 5 лет</MenuItem>
                    <MenuItem value={10}>До года</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ПДН</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pdn || null}
                    label="ПДН"
                    onChange={(event) => {
                        setPdn(event.target.value as number);
                        calculatedRisk()
                    }}
                >
                    <MenuItem value={20}>Свыше 95%</MenuItem>
                    <MenuItem value={10}>От 70 до 95%</MenuItem>
                    <MenuItem value={1}>До 70%</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Уровень дохода</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={salary || null}
                    label="Уровень дохода"
                    onChange={(event) => {
                        setSalary(event.target.value as number);
                        calculatedRisk()
                    }}
                >
                    <MenuItem value={1}>Свыше 250 тыс</MenuItem>
                    <MenuItem value={3}>От 101 до 250 тыс</MenuItem>
                    <MenuItem value={5}>От 50 до 100 тыс</MenuItem>
                    <MenuItem value={7}>До 50 тыс</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Сберегательный счет</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hasSave || null}
                    label="Сберегательный счет"
                    onChange={(event) => {
                        setHasSave(event.target.value as number);
                        calculatedRisk()
                    }}
                >
                    <MenuItem value={1}>Да</MenuItem>
                    <MenuItem value={5}>Нет</MenuItem>
                </Select>
            </FormControl>
            </>}

            {step === 2 && <>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Одобрена ли заявка</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={approve || null}
                        label="Одобрена ли заявка"
                        onChange={(event) => setApprove(event.target.value as number)}
                    >
                        <MenuItem value={1}>Да</MenuItem>
                        <MenuItem value={2}>Нет</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <TextField
                        multiline={true}
                        id="demo-simple-select"
                        value={approve || null}
                        label="Если нет, укажите причину"
                    />
                </FormControl>
            </>}

            {risk !== 0 &&
                <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <h2 className={risk > 70 ? styles.high : (risk > 30 ? styles.medium : styles.low)}>
                Уровень риска: {risk}</h2>
                    <Button onClick={() => setStep(step === 1 ? 2 : 1)}>{step === 1 ? 'Следующий шаг' : 'Предыдущий шаг'}</Button>
                </div>}

            {approve !== undefined && step === 2 && <Button style={{justifySelf: 'flex-end'}}>Завершить рассмотрение</Button>}
        </div>
    </div>
}