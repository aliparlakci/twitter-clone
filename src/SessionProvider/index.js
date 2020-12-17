import { useContext } from "react";
import { SessionContext, SessionProvider } from "./context";

const useSession = () => useContext(SessionContext);

export { SessionContext, SessionProvider, useSession };
