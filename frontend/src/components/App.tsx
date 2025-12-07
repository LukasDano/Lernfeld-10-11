import { useContext, useState } from 'react';
import { Toaster } from 'sonner';

import { AppContext } from './AppContext.tsx';
import { LoginForm } from './content/login/LoginModal.tsx';
import { PageHeader } from './content/PageHeader.tsx';
import { LeaderBoard } from './content/tables/leaderBoard/LeaderBoard.tsx';
import { RunTable } from './content/tables/runTable/RunTable.tsx';
import { AddDataModal } from './modal/AddDataModal.tsx';

export const App = () => {
    const { addRun, userId } = useContext(AppContext);

    const [addDataModalOpen, setAddDataModalOpen] = useState<boolean>(false);

    return (
        <>
            <Toaster position="top-right" closeButton={true} richColors={true} />

            {userId !== 0 ? (
                <>
                    <AddDataModal
                        isOpen={addDataModalOpen}
                        onClose={() => setAddDataModalOpen(false)}
                        onSave={addRun}
                    />
                    <PageHeader openAddDataModal={() => setAddDataModalOpen(true)} />

                    <div className="flex flex-row items-center content-center justify-between p-48">
                        <RunTable />
                        <LeaderBoard />
                    </div>
                </>
            ) : (
                <LoginForm />
            )}
        </>
    );
};
