'use client'

import { ReactNode } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import clsx from 'clsx'

interface BreadcrumbOneProps {
  children: ReactNode
  backgroundImage?: string
  pageTitle?: string
  className?: string
}

const BreadcrumbOne = ({
  children,
  backgroundImage,
  pageTitle,
  className,
}: BreadcrumbOneProps) => {
  return (
    <div
      className={clsx('breadcrumb-area space-pt--70 space-pb--70', className)}
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL + backgroundImage}")`,
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1 className="breadcrumb__title">{pageTitle}</h1>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BreadcrumbOne
