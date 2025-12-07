import { useContext, useState } from 'react';
import { Toaster } from 'sonner';

import { AppContext } from './AppContext.tsx';
import { LoginForm } from './content/login/LoginModal.tsx';
import { AddDataModal } from './modal/AddDataModal.tsx';
import { PageHeader } from './content/PageHeader.tsx';
import { LeaderBoard } from './content/table/LeaderBoard.tsx';
import { RunTable } from './content/table/RunTable.tsx';

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

                    <div className="w-full flex justify-center px-6">
                        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-52">
                            <div className="w-full md:w-2/3">
                                <RunTable />
                            </div>

                            <div className="w-full md:w-1/3">
                                <LeaderBoard />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <LoginForm />
            )}
        </>
    );
};
