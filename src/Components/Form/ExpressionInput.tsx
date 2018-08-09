import * as React from 'react';
import TextField from './TextField';

interface IExpressionInputProps {
    submitExpression: (expression: string) => void
}

interface IExpressionInputState {
    expression: string,
    windowWidth: number
}

export default class ExpressionInput extends React.Component<IExpressionInputProps, IExpressionInputState> {
    constructor(props: IExpressionInputProps) {
        super(props);

        this.state = { expression: '', windowWidth: 0 };
    }

    public componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    public render() {
        return (
            <div style={{textAlign: 'left', margin: '0 0 20px 0' }}>
                <TextField 
                    onChange={this.handleExpressionChange}
                    onKeyPress={this.handleKeyPress}
                    value={this.state.expression}
                    style={{
                        fontSize: '28px',
                        margin: '10px 0 20px 10px',
                        padding: '5px',
                        width: this.state.windowWidth - 45
                    }}
                    placeholder="Expression"
                />
            </div>
        )
    }

    private handleExpressionChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ expression: e.target.value });

    private handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.props.submitExpression(this.state.expression);
            this.setState({ expression: '' });
        }
    }

    private updateWindowDimensions = () => this.setState({ windowWidth: window.innerWidth });
}