import styled from 'styled-components';
import WithColor from '../HOC/WithColor';
import TitleComponent from '../HOC/TitleComponent';
import Article from '../HOC/Article';
import OnMouseHover from '../renderProps/OnMouseHover';

const MainContainer = styled.div`
    height: 60rem;

`
const TitleWithRandomColor = WithColor(TitleComponent);

// const ArticleWithRandomColor = WithColor(Article);
const Main = props => {
    const renderProps = point => {
        return (
            <div>
                <h3>The mouse current positsion: {point.x}; {point.y} </h3>
            </div>
        )
    }
    return (
        <MainContainer className="main">
            <h2>Main content</h2>
            <TitleWithRandomColor
                shortTitle='Short title'
            />
            <Article />
            <div style={{ height: '100px', border: '1px solid green' }}>
                <OnMouseHover
                    render={renderProps}
                />
            </div>

        </MainContainer>
    )
}

export default Main;