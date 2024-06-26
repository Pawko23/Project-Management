import { createPortal } from 'react-dom';

export default function ProjectModal() {
    return createPortal(
        <dialog className="new-project">
            <form method='dialog'>
                <button>Save</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
}