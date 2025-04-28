export default function CartBadge({ count, handleToggleModal }: { count: number, handleToggleModal: () => void }) {
    return (
        <button type="button" onClick={handleToggleModal} className="absolute -top-4 -right-2 bg-accentsColor dark:bg-accentsDarkColor w-6 h-6 flex items-center justify-center rounded-full cursor-pointer">
            <p>{count}</p>
        </button>
    )
}