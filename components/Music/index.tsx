import React, { useRef, useState } from 'react'
import styles from './index.module.css'

interface MusicProps {
  id: string | number
  auto?: boolean
}

export const Music: React.FC<MusicProps> = ({ id, auto = false }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [idState] = useState(id)
  const [autoState] = useState(auto)

  return (
    <div className={styles.musicWrapper}>
      <iframe
        className={styles.musicIframe}
        frameBorder="no"
        marginWidth={0}
        marginHeight={0}
        width={"100%"}
        height={86}
        src={`//music.163.com/outchain/player?type=2&id=${idState}&auto=${
          autoState ? 1 : 0
        }&height=66`}
        ref={iframeRef}
      />
    </div>
  )
}

export default Music 