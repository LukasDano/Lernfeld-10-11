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

                    <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-12 gap-20 md:gap-32 max-w-7xl mx-auto">
                        <div className="w-full md:flex-1 md:min-w-[600px]">
                            <RunTable />
                        </div>

                        <div className="w-full md:flex-1 md:min-w-[750px]">
                            <LeaderBoard />
                        </div>
                    </div>
                </>
            ) : (
                <LoginForm />
            )}
        </>
    );
};
