const CodeEditor = () => {

    return (
        <div className="single-project-container">
            <div style={{
                width: '50%',
                height: '600px',
                maxHeight: '600px',
                overflowX: 'hidden',
                overflow: 'scroll'
            }}>
                <iframe 
                    src="https://codeplatoon.github.io/code-platoon-code-editor/pages/code-editor" 
                    sandbox="allow-scripts allow-same-origin" 
                    allow="clipboard-write"
                    style={{
                        width: '165%',
                        height: '800px',
                        border: 'none'
                    }}
                />
            </div>
        </div>
    )
}

export default CodeEditor;