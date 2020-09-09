import { useHistory } from "react-router-dom";
import { useCallback } from "react";

export const useCustomHistory = () => {
    const history = useHistory();

    const handleGoBack = useCallback(() => {
        history.goBack();
    }, [history]);

    const handlePushHistory = useCallback(
        (name: string) => {
            history.push(name);
        },
        [history]
    );

    return {
        handleGoBack,
        handlePushHistory,
    };
};
