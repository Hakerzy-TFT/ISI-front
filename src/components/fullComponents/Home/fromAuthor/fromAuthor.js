import React from 'react';
import './fromAuthor.css';
import MiniatureGame from '../../../commons/miniatureGame/miniatureGame';
function fromAuthor() {
    return (
        <div className="fromAuthor">
            OD TWÓRCÓW<br />
            <div className="fromAuthorContent">
                <div className="fromAuthorOption">
                    POPULARNE
                </div>
                <div className="fromAuthorOption">
                    DZISIAJ
                </div>
                <div className="fromAuthorOption">
                    TYDZIEŃ
                </div>
                <div className="fromAuthorOption">
                    MIESIĄC
                </div>
                <div className="fromAuthorOption">
                    ROK
                </div>
            </div>
            <div className="miniatureContent">
                <div className="miniatureContentGame">
                    <MiniatureGame />
                </div>
                <div className="miniatureContentGame">
                    <MiniatureGame />
                </div>
                <div className="miniatureContent">
                    <div className="miniatureContentGame">
                        <MiniatureGame />
                    </div>
                    <div className="miniatureContentGame">
                        <MiniatureGame />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default fromAuthor
