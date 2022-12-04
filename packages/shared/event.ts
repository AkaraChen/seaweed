export const handleCheckbox = (event: Event, eventTarget: EventTarget) => {
    const element = event.target as HTMLInputElement;
    const state = element.checked;
    eventTarget.dispatchEvent(
        new CustomEvent('change', {
            detail: {
                value: state
            }
        })
    );
};

export const handleInput = (event: Event, eventTarget: EventTarget) => {
    const element = event.target as HTMLInputElement;
    eventTarget.dispatchEvent(
        new CustomEvent('change', {
            detail: {
                value: element.value
            }
        })
    );
};
