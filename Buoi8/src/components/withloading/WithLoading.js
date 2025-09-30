import { useState } from 'react'
import './WithLoading.css'
const WithLoading = WrappedComponent => {
    const WithLoadingComponent = props => {
        const [isLoading, setIsLoading] = useState(false);

        const _showLoading = isLoading => {
            setIsLoading(isLoading);
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }
        return (
            <div className={isLoading ? 'loading-container active' : 'loading-container'}>
                {
                    isLoading && <div className='loading-content'>
                        <img
                            style={{ width: '100%' }}
                            src='images/loading.gif' />
                        <h4>Loading...</h4>
                    </div>
                }

                <WrappedComponent
                    {...props}
                    showLoading={_showLoading}
                />
            </div>
        )
    }
    return WithLoadingComponent
}

export default WithLoading