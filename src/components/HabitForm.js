import React, { use, useEffect, useState } from "react";
import CoinIcon from "../assets/coin.svg";

function HabitForm({ onAddHabit}) {
    
    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('medium');
    const [frequency, setFrequency] = useState('daily');
    const [coinValue, setCoinValue] = useState(2); 

    useEffect(() => {
        const difficultyValues = {
            easy: 1,
            medium: 2,
            hard: 3
        };
        setCoinValue(difficultyValues[difficulty]);        
    }, [difficulty]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHabit = {
            id: Date.now(),
            name,
            difficulty,
            frequency,
            coinValue: parseInt(coinValue),
            completed: false,
            createdAt: new Date().toISOString()
        };

        onAddHabit(newHabit);
        setName('');
        setDifficulty('medium');
        setFrequency('daily');
    };

    return (
        <form onSubmit={handleSubmit} className="habit-form">
        <h3>Create a new habit</h3>
        
        <div className="form-group">
            <label>Habit name:</label>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Example: Read for 20 minutes"
            />
        </div>

        <div className="form-group">
            <label>Difficulty:</label>
            <select 
            value={difficulty} 
            onChange={(e) => setDifficulty(e.target.value)}
            >
            <option value="easy">Easy (1 Coin)</option>
            <option value="medium">Medium (2 Coins)</option>
            <option value="hard">Hard (3 coins)</option>
            </select>
        </div>

        <div className="form-group">
            <label>Frequency:</label>
            <select 
            value={frequency} 
            onChange={(e) => setFrequency(e.target.value)}
            >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            </select>
        </div>

        <div className="form-group">
            <label>Reward:</label>
            <div className="coin-display">
                <span className="coin-value">
                    <img src={CoinIcon} alt="Coins" className="icon"/> {coinValue}
                </span>
            </div>
            <small>Coins you earn by completing this habit</small>
        </div>

        <button type="submit">Add habit</button>
        </form>
    );
}

export default HabitForm;