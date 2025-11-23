import { render } from '@testing-library/react'
import { LoadingTrackItem } from './LoadingTrackItem'

describe('LoadingTrackItem', () => {
	test('рендерит корневой скелетон', () => {
		const { container } = render(<LoadingTrackItem />)

		const root = container.querySelector('.loadingItem')

		expect(root).toBeInTheDocument()
	})
})
